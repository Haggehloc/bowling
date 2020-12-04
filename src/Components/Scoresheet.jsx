import React from 'react';
import ReactDOM from 'react-dom';

class Scoresheet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            frames: []
        }
    }

    onChange = (e) => {
        const target = e.target;
        const value = target.value || 0;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        let frames = [];
        this.setState({
            error: ""
        })


        frames.push([this.state.top1, this.state.bottom1]);
        frames.push([this.state.top2, this.state.bottom2]);
        frames.push([this.state.top3, this.state.bottom3]);
        frames.push([this.state.top4, this.state.bottom4]);
        frames.push([this.state.top5, this.state.bottom5]);
        frames.push([this.state.top6, this.state.bottom6]);
        frames.push([this.state.top7, this.state.bottom7]);
        frames.push([this.state.top8, this.state.bottom8]);
        frames.push([this.state.top9, this.state.bottom9]);
        frames.push([this.state.top10, this.state.bottom10, this.state.extra]);



        e.preventDefault();
        console.log(this.calculateScore(frames));
        let result = this.calculateScore(frames);

        console.log(result);

        this.setState({
            total: result,
            frames: frames
        })

        console.log(this.state);
    }

    verifyFrame = (top, bottom, extra) => {
        if(parseInt(top) > 10 || parseInt(bottom) > 10 || parseInt(extra) > 10){
            this.setState({
                error: "Scoresheet invalid: Numbers should be between 0-10"
            })
        }
        if(extra && parseInt(top) + parseInt(bottom) < 10){
            this.setState({
                error: "Scoresheet invalid: Cannot have a third score in the tenth frame if you did not complete 10 pins."
            })
        }
    }

    calculateScore = (frames) => {
        if(frames) {
            let subTotal = frames.map((frame, index, array) => {
                let bottom = frame[1] || 0;
                let top = frame[0] || 0;
                this.verifyFrame(top, bottom, frame[2]);

                if(index === 9) {
                    let extra = frame[2] || 0;
                    return parseInt(bottom) + parseInt(top) + parseInt(extra);
                }

                if(top == 10){
                    let nextFrame = array[index + 1];
                    let nextFrameTop = nextFrame[0] || 0;
                    let nextFrameBottom = nextFrame[1] || 0;
                    let nextFrameTotal = 10;

                    if(nextFrameTop == 10) {
                        nextFrameBottom = array[index + 2][0] || 0;
                    } else {
                        nextFrameTotal += (parseInt(nextFrameTop)) + (parseInt(nextFrameBottom));
                    }
                    return nextFrameTotal;
                }
                let frameTotal = parseInt(bottom) + parseInt(top);
                if(frameTotal == 10) {
                    let nextFrame = array[index + 1];
                    let nextFrameTop = nextFrame[0] || 0;
                    let nextFrameTotal = 10;

                    nextFrameTotal += parseInt(nextFrameTop);
                    return nextFrameTotal;
                }

                return parseInt(bottom) + parseInt(top);
            });
            let total = subTotal.reduce((total, frame) => total + frame);
            return total;
        }
    }


    render () {
        return <body>
                    Please enter your bowling scores.
                    <form className="form-inline">
                        <div className="form-group mr-2">
                            <label className="frame1" htmlFor="inputEmail">Frame 1</label>
                            <input type="number" name="top1" defaultValue = "0" onChange={this.onChange} className="form-control" id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control"  name="bottom1" defaultValue = "0" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame1" htmlFor="inputEmail">Frame 2</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top2" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom2" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame1" htmlFor="inputEmail">Frame 3</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top3" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom3" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame1" htmlFor="inputEmail">Frame 4</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top4" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom4" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame2" htmlFor="inputEmail">Frame 5</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top5" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom5" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame2" htmlFor="inputEmail">Frame 6</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top6" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom6" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame3" htmlFor="inputEmail">Frame 7</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top7" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom7" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame3" htmlFor="inputEmail">Frame 8</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top8" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom8" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame4" htmlFor="inputEmail">Frame 9</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top9" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom9" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <label className="frame5" htmlFor="inputEmail">Frame 10</label>
                            <input type="number" className="form-control" defaultValue = "0" name="top10" onChange={this.onChange} id="top_frame" placeholder="Top of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="bottom10" onChange={this.onChange} id="bottom_frame" placeholder="Bottom of the frame"/>
                        </div>
                        <div className="form-group mr-2">
                            <input type="number" className="form-control" defaultValue = "0" name="extra" onChange={this.onChange} id="extra_frame" placeholder="extra frame"/>
                        </div>
                        <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit Score</button>
                    </form>
                    <div className="error">{this.state.error}</div>
                    <div>Total Score: {this.state.total}
                    </div>
                </body>
    }
}

export default (Scoresheet);
