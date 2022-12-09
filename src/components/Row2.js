const Row2 = () => {
    return (
        <div className="row" id="row2">
                    <div className="col-xl-4 col-md-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <h4 className="card-title fw-semibold">Top sales</h4>
                        </div>
                        <div className="card-body pb-0">
                          <ul className="task-list">
                            <li>
                              <i className="task-icon bg-primary" />
                              <p className="fw-semibold mb-1 fs-13">New Products Introduced<span className="text-muted fs-12 ms-2 ms-auto float-end">1:43 pm</span></p>
                              <p className="text-muted fs-12">Lorem ipsum dolor sit.<a href="#" className="fw-semibold ms-1">Product Light Launched</a></p>
                            </li>
                            <li>
                              <i className="task-icon bg-secondary" />
                              <p className="fw-semibold mb-1 fs-13">Hermoine Replied<span className="text-muted fs-12 ms-2 float-end">6:12 am</span></p>
                              <p className="text-muted fs-12">Hermoine replied to your post on<a href="#" className="fw-semibold ms-1"> Detailed Blog</a></p>
                            </li>
                            <li>
                              <i className="task-icon bg-info" />
                              <p className="fw-semibold mb-1 fs-13">New Request<span className="text-muted fs-12 ms-2 float-end">11:22 am</span></p>
                              <p className="text-muted fs-12">Corner sent you a request<a href="#" className="fw-semibold ms-1"> Facebook</a></p>
                            </li>
                            <li>
                              <i className="task-icon bg-warning" />
                              <p className="fw-semibold mb-1 fs-13">Task Due<span className="text-muted fs-12 ms-2 float-end">4:32 pm</span></p>
                              <p className="text-muted mb-0 fs-12">Task has to be completed <a href="#" className="fw-semibold ms-1"> New Project</a></p>
                            </li>
                            <li className="mb-2">
                              <i className="task-icon bg-primary" />
                              <p className="fw-semibold mb-1 fs-13">Maggice Liked<span className="text-muted fs-12 ms-2 float-end">5 mins ago</span></p>
                              <p className="text-muted mb-0 fs-12">Maggice bruce liked your article <a href="#" className="fw-semibold ms-1"> Article on Projects</a></p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                      <div className="card overflow-hidden">
                        <div className="card-header border-bottom">
                          <div>
                            <h3 className="card-title">Top Cite</h3>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="tl-container">
                            <div className="tl-blog primary">
                              <div className="tl-img rounded-circle bg-primary-transparent">
                                <i className="fe fe-user-plus text-primary text-17" />
                              </div>
                              <div className="tl-details d-flex">
                                <p>
                                  <span className="tl-title-main"> Mr White </span>  Started following you
                                  <span className="d-flex text-muted fs-12">10 Jan 2022</span>
                                </p>
                                <p className="ms-auto text-13">
                                  <span className="badge bg-primary text-white">1m</span>
                                </p>
                              </div>
                            </div>
                            <div className="tl-blog secondary">
                              <div className="tl-img rounded-circle bg-secondary-transparent">
                                <i className="fe fe-message-circle text-secondary text-17" />
                              </div>
                              <div className="tl-details d-flex">
                                <p>
                                  <span className="tl-title-main"> Caroline </span>  1 Commented applied
                                  <span className="d-flex text-muted fs-12">09 Jan 2022</span>
                                </p>
                                <p className="ms-auto text-13">
                                  <span className="badge bg-secondary text-white">2m</span>
                                </p>
                              </div>
                            </div>
                            <div className="tl-blog teritary">
                              <div className="tl-img rounded-circle bg-info-transparent">
                                <i className="fe fe-clipboard text-info text-17" />
                              </div>
                              <div className="tl-details d-flex">
                                <p>
                                  <span className="tl-title-main"> Juliette </span>  posted a new article
                                  <span className="d-flex text-muted fs-12">07 Jan 2022</span>
                                </p>
                                <p className="ms-auto text-13">
                                  <span className="badge bg-info text-white">3m</span>
                                </p>
                              </div>
                            </div>
                            <div className="tl-blog custom-yellow">
                              <div className="tl-img rounded-circle bg-warning-transparent">
                                <i className="fe fe-thumbs-up text-warning text-17" />
                              </div>
                              <div className="tl-details d-flex">
                                <p>
                                  <span className="tl-title-main"> Akimov </span>  liked your site
                                  <span className="d-flex text-muted fs-12">07 Dec 2022</span>
                                </p>
                                <p className="ms-auto text-13">
                                  <span className="badge bg-warning text-white">4m</span>
                                </p>
                              </div>
                            </div>
                            <div className="tl-blog primary">
                              <div className="tl-img rounded-circle bg-primary-transparent">
                                <i className="fe fe-book text-primary text-17" />
                              </div>
                              <div className="tl-details d-flex">
                                <p className="mb-0">
                                  <span className="tl-title-main"> Emilie </span>sent you a feedback
                                  <span className="d-flex text-muted fs-12">06 Jan 2022</span>
                                </p>
                                <p className="ms-auto text-13 mb-0">
                                  <span className="badge bg-orange text-white">5m</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                      <div className="card overflow-hidden">
                        <div className="card-header title-submenu border-bottom">
                          <h3 className="card-title">Active User</h3>
                        </div>
                        <div className="card-body">
                          <div className="todo-container">
                            <div className="todo-blog primary">
                              <label className="todo-img">
                                <input type="checkbox" className="todo-checkbox" name="todo-checkbox" defaultChecked="checked" />
                                <span className="checkmark" />
                              </label>
                              <div className="todo-details d-flex">
                                <p className="mb-0">Design a UI Dashboard for client
                                  <span className="d-flex text-muted fs-12">3 days remaining</span>
                                </p>
                                <div className="ms-auto text-13 fw-semibold">
                                  <a href="javascript:void(0)" className="btn btn-sm btn-outline-light">Edit</a>
                                </div>
                              </div>
                            </div>
                            <div className="todo-blog secondary">
                              <label className="todo-img">
                                <input type="checkbox" className="todo-checkbox" name="todo-checkbox" defaultChecked="checked" />
                                <span className="checkmark" />
                              </label>
                              <div className="todo-details d-flex">
                                <p className="mb-0">Design a UI Dashboard for client
                                  <span className="d-flex text-muted fs-12">3 days remaining</span>
                                </p>
                                <div className="ms-auto text-13 fw-semibold">
                                  <a href="javascript:void(0)" className="btn btn-sm btn-outline-light">Edit</a>
                                </div>
                              </div>
                            </div>
                            <div className="todo-blog teritary">
                              <label className="todo-img">
                                <input type="checkbox" className="todo-checkbox" name="todo-checkbox" />
                                <span className="checkmark" />
                              </label>
                              <div className="todo-details d-flex">
                                <p className="mb-0">Design a UI Dashboard for client
                                  <span className="d-flex text-muted fs-12">3 days remaining</span>
                                </p>
                                <div className="ms-auto text-13 fw-semibold">
                                  <a href="javascript:void(0)" className="btn btn-sm btn-outline-light">Edit</a>
                                </div>
                              </div>
                            </div>
                            <div className="todo-blog custom-yellow">
                              <label className="todo-img">
                                <input type="checkbox" className="todo-checkbox" name="todo-checkbox" defaultChecked="checked" />
                                <span className="checkmark" />
                              </label>
                              <div className="todo-details d-flex">
                                <p className="mb-0">Design a UI Dashboard for client
                                  <span className="d-flex text-muted fs-12">3 days remaining</span>
                                </p>
                                <div className="ms-auto text-13 fw-semibold">
                                  <a href="javascript:void(0)" className="btn btn-sm btn-outline-light">Edit</a>
                                </div>
                              </div>
                            </div>
                            <div className="todo-blog primary">
                              <label className="todo-img">
                                <input type="checkbox" className="todo-checkbox" name="todo-checkbox" />
                                <span className="checkmark" />
                              </label>
                              <div className="todo-details d-flex">
                                <p className="mb-0">Design a UI Dashboard for client
                                  <span className="d-flex text-muted fs-12">3 days remaining</span>
                                </p>
                                <div className="ms-auto text-13 fw-semibold">
                                  <a href="javascript:void(0)" className="btn btn-sm btn-outline-light">Edit</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        </div>
    );
}
export default Row2;
