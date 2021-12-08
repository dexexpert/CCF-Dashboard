import React from 'react'


const ProductContent = () => {
	return (
		<div>
			<h2>Tokenomics</h2>
			<p className="font-size-md">
				<p>
					Maximum token supply - 2,000,000,000,000 (two trillion).
			</p>
				<p>
					Circa 300,000,000,000 were immediately sent to a burn wallet.
			</p>
				<p>
					<strong>
						All remaining tokens are in circulation.
				</strong>
				</p>
				<p>
					<strong>There is a 12% tax on BOTH Buys and Sells which will be distributed as follows:</strong>
					<ul>
						<li>
							2% is burned and 1% is added back to liquidity
					</li>
						<li>
							3% is reflected to holders
					</li>
						<li>
							3% goes to farming (DAO)
					</li>
						<li>
							3% to marketing
					</li>
					</ul>
				</p>
			</p>
		</div>
	)
}

export default ProductContent
