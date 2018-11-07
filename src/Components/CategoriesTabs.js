import React from 'react'

const Categories = () => {
	return (
		<div id='Categories'>

			<div className="container">

				<h3>Kategori</h3>
				<p>Taruh Kategori di sini!</p>

				<ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" role="tab" aria-controls="home"
							aria-selected="true">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" role="tab" aria-controls="profile"
							aria-selected="false">Profile</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" role="tab" aria-controls="contact"
							aria-selected="false">Contact</a>
					</li>
				</ul>

				{/* DATA TARGET HARUS SAMA DENGAN ID */}

				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

						<div className="container">
							<div className="row">

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg"
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg"
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg"
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

							</div>
						</div>

					</div>

					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<div className="container">
							<div className="row">

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src=""
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg"
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg"
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<div className="container">
							<div className="row">

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg"
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?cs=srgb&dl=attractive-beautiful-beautiful-girl-458766.jpg&fm=jpg"
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-4">
									<div className="card mb-3">
										<img className="card-img-top" src=""
											alt="Card cap" />
										<div className="card-body">
											<h5 className="card-title">Nama Item</h5>
											<p className="card-text">Description</p>
											<p className="card-text">Price</p>
											<p className="card-text">Qty</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>

			</div>

		</div>
	)
}

export default Categories