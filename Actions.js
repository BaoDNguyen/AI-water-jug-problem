class Actions {
    constructor() {
    }

    static GenerateChild (currentState,action) {
        let nextState = [];
        if (action === 1) {
            nextState[0] = 0;
            nextState[1] = currentState[1];
        } else if (action === 2) {
            let sum = currentState[0] + currentState[1];
            if (sum >= small) {
                nextState[1] = small;
                nextState[0] = sum - small;
            } else {
                nextState[1] = sum;
                nextState[0] = 0;
            }
        } else if (action === 3) {
            nextState[0] = currentState[0];
            nextState[1] = 0;
        } else if (action === 4) {
            let sum = currentState[0] + currentState[1];
            if (sum >= large) {
                nextState[0] = large;
                nextState[1] = sum - large;
            } else {
                nextState[0] = sum;
                nextState[1] = 0;
            }
        }
        return nextState;
    }

}