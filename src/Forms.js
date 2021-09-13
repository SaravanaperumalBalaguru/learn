import React from 'react';

class Forms extends React.Component {
    render() {
        return (
            <div className="container">

                <form className="form-horizontal" action="/action_page.php">

                    <div className="form-group row">
                        <label className="control-label col-sm-1" for="email">Email:</label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="control-label col-sm-1" for="pwd">Password:</label>
                        <div className="col-sm-6">
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label><input type="checkbox" /> Remember me</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}


export default Forms;