import React from "react";

export default abstract class ActivityInterface<P = {}, S = {}> extends React.Component<P, S> {
    abstract verifyAnswer(): boolean;

    render() {
        return (
            <div>
                <p>abstract activity</p>
            </div>
        );
    }
}
