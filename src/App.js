import React from 'react';

function App() {
	return (
		<>
			<div className='wrapper clear'>
				{/* Start Header */}
				<header className='header d-flex justify-between align-center p-40'>
					<div className='d-flex'>
						<img
							className='mr-15'
							src='/img/logo.png'
							alt='Logo'
							width={40}
							height={40}
						/>

						<div>
							<strong className='text-uppercase'>
								React Sneakers
							</strong>{' '}
							<br />
							<span>Магазин лучших кроссовок</span>
						</div>
					</div>

					<ul className='d-flex'>
						<li className='d-flex align-center mr-30'>
							<img
								className='mr-10'
								src='/img/cart.svg'
								alt='Cart img'
							/>
							<span>1205 руб.</span>
						</li>

						<li>
							<img src='/img/user.svg' alt='Cart ' />
						</li>
					</ul>
				</header>
				{/* End Header */}

				{/* End Content */}
				<div className='content p-40'>
					<h2 className='section__heading'>Все кроссовки</h2>

					<ul className='cards-list'>
						<li className='card'>
							<img
								src='/img/sneakers/1.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>

						<li className='card'>
							<img
								src='/img/sneakers/2.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>

						<li className='card'>
							<img
								src='/img/sneakers/3.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>

						<li className='card'>
							<img
								src='/img/sneakers/4.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>

						<li className='card'>
							<img
								src='/img/sneakers/5.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>

						<li className='card'>
							<img
								src='/img/sneakers/6.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>

						<li className='card'>
							<img
								src='/img/sneakers/7.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>

						<li className='card'>
							<img
								src='/img/sneakers/8.jpg'
								alt='Sneaker img'
								width={133}
								height={112}
							/>

							<h3 className='card__title'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</h3>

							<div className='d-flex justify-between align-center'>
								<div>
									<span className='card__price-name d-block'>
										ЦЕНА:
									</span>
									<ins className='card__price-value'>
										12999 руб.
									</ins>
								</div>
								<button className='card__btn'>
									<img
										src='/img/plus.svg'
										alt='Plus icon'
										width={11}
										height={11}
									/>
								</button>
							</div>
						</li>
					</ul>
				</div>
				{/* End Content */}
			</div>
		</>
	);
}

export default App;
