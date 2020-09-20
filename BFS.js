class BlindSearch {
   constructor() {
   }

   static BFS (start,goal) {
       let open = [start];
       let closed = [];
       let node = [];
       let parent = [];
       let action = [];
       let result = [];
       let X = [];
       while (open.length > 0) {
           // remove leftmost state from open
           X = open.splice(0,1)[0].map(e=>e);
           if (X[0] === goal[0] && X[1] === goal[1]) {
               break;       // success
           } else {
               // generate children
               let children = [[],[],[],[]];
               if (X[0] > 0) {
                   children[0] = Actions.GenerateChild(X,1);
                   children[1] = Actions.GenerateChild(X,2);
                   node.push(children[0]);
                   parent.push([X[0],X[1]]);
                   action.push(A1);
                   node.push(children[1]);
                   parent.push([X[0],X[1]]);
                   action.push(A2);
               }
               if (X[1] > 0) {
                   children[2] = Actions.GenerateChild(X,3);
                   children[3] = Actions.GenerateChild(X,4);
                   node.push(children[2]);
                   parent.push([X[0],X[1]]);
                   action.push(A3)
                   node.push(children[3]);
                   parent.push([X[0],X[1]]);
                   action.push(A4);
               }
               // add X to closed
               closed.push(X);
               // add children not in open or closed to right end of open
               children.forEach(e=>{
                   if (e.length > 0) {
                       let check1 = true;
                       let check2 = true;
                       if (open) check1 = open.findIndex(e_=>e_[0]===e[0]&&e_[1]===e[1]) === -1;
                       if (closed) check2 = closed.findIndex(e_=>e_[0]===e[0]&&e_[1]===e[1]) === -1;
                       if (check1 && check2) {
                           open.push(e);
                       }
                   }
               });
               X.length = 0;
           }
       }
       if (X) {
           let index = node.findIndex(e=>e[0]===X[0]&&e[1]===X[1]);
           let parentNode = [parent[index][0],parent[index][1]];
           result.push({action: action[index],state:[X[0],X[1]]});
           while (parentNode[0] !== start[0] || parentNode[1] !== start[1]) {
               X.length = 0;
               X = [parentNode[0],parentNode[1]];
               index = node.findIndex(e=>e[0]===X[0]&&e[1]===X[1]);
               parentNode.length = 0;
               parentNode = [parent[index][0],parent[index][1]];
               result.push({action: action[index],state:[X[0],X[1]]});
           }
       } else {
           // fail
       }
       return result;
   }

}