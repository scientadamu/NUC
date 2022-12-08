const Row3 = () => {
  return (
    <div className="row" id="row3">
      <div className="col-lg-6 col-sm-12 col-md-6 col-xl-3">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h3 className="mb-2 fw-semibold">1,12,324</h3>
                <p className="text-muted fs-13 mb-0">Daily Visitors</p>
                <p className="text-muted mb-0 mt-2 fs-12">
                  <span className="icn-box text-success fw-semibold fs-13 me-1">
                    42%</span>
                  since last month
                </p>
              </div>
              <div className="col col-auto top-icn dash">
                <div className="counter-icon bg-primary dash ms-auto box-shadow-primary">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 col-xl-3">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h3 className="mb-2 fw-semibold">12,563</h3>
                <p className="text-muted fs-13 mb-0">Total Orders</p>
                <p className="text-muted mb-0 mt-2 fs-12">
                  <span className="icn-box text-danger fw-semibold fs-13 me-1">

                    12%</span>
                  since last month
                </p>
              </div>
              <div className="col col-auto top-icn dash">
                <div className="counter-icon bg-secondary dash ms-auto box-shadow-secondary">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Row3;
