import React, { lazy, Suspense } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const menuList = [
	{
		name: 'First Page',
		key: 'firstpage',
		sub: []
	},
	{
		name: 'Trust & Transparency - Secure Defi 3.0 For All',
		key: 'trust',
		sub: []
	},
	{
		name: 'DeFi 3.0 - How We Do It',
		key: 'how-we-do-it',
		sub: []
	},
	{
		name: 'What Is Defi Yield Farming',
		key: 'what-is-defi-yield-farming',
		sub: []
	},
	{
		name: 'Understanding DeFi 3.0',
		key: 'understanding-defi',
		sub: []
	},
	{
		name: 'Why Trust Us?',
		key: 'why-trust-us',
		sub: []
	},
	{
		name: 'Tokenomics',
		key: 'tokenomics',
		sub: []
	},
	{
		name: '[3.3.3.3]',
		key: 'three-three',
		sub: []
	},
	{
		name: 'The Cross Chain Farming Ecosystem',
		key: 'ecosystem',
		sub: []
	},
	{
		name: 'Roadmap',
		key: 'roadmap',
		sub: []
	},
	{
		name: 'Our Team',
		key: 'our-team',
		sub: []
	},
	{
		name: 'Useful Links',
		key: 'useful-links',
		sub: []
	}
]

const prefix = 'documentation/'

const DocsMenu = (props) => {
	const { match, location } = props
	return (
		<div className="w-100">
			<Menu
				defaultSelectedKeys={`${match.url}/${prefix}FirstPage`}
				mode="inline"
				selectedKeys={[location.pathname]}
			>
				{menuList.map(elm => {
					if (elm.sub.length === 0) {
						return (
							<Menu.Item key={`${match.url}/${prefix}${elm.key}`}>
								<span>{elm.name}</span>
								<Link to={`${match.url}/${prefix}${elm.key}`} />
							</Menu.Item>
						)
					} else {
						return (
							<Menu.SubMenu key={`${match.url}/${prefix}${elm.key}`} title={elm.name}>
								{elm.sub.map(item => (
									<Menu.Item key={`${match.url}/${prefix}${item.key}`}>
										<span>{item.name}</span>
										<Link to={`${match.url}/${prefix}${item.key}`} />
									</Menu.Item>
								))}
							</Menu.SubMenu>
						)
					}
				})}
			</Menu>
		</div>
	)
}

const Docs = props => {
	const { match } = props
	return (
		<InnerAppLayout
			sideContent={<DocsMenu {...props} />}
			mainContent={
				<div className="p-4">
					<div className="container-fluid">
						<Suspense fallback={<Loading />}>
							<Switch>
								{menuList.map(elm => (
									elm.sub.length === 0 ?
										<Route
											key={elm.key}
											path={`${match.url}/${prefix}${elm.key}`}
											component={lazy(() => import(`./components/${elm.key.replace(/\s/g, '')}`))}
										/>
										:
										elm.sub.map(item => (
											<Route
												key={item.key}
												path={`${match.url}/${prefix}${item.key}`}
												component={lazy(() => import(`./components/${item.key.replace(/\s/g, '')}`))}
											/>
										))
								))}
								<Redirect from={`${match.url}`} to={`${match.url}/${prefix}FirstPage`} />
							</Switch>
						</Suspense>
					</div>
				</div>
			}
			sideContentWidth={300}
			sideContentGutter={false}
			border
		/>
	)
}

export default Docs
