let slotsA = [[1,10]]
       let  slotsB =  [[2,3],[5,7]]
        let dur = 2
         

// output:[5,7]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
console.log(meetingPlanner(slotsA, slotsB, dur))
function meetingPlanner(slotsA, slotsB, dur) {
    // your code goes here
  let i =0;
    let j=0;
    let arr=[];
    while(i<slotsA.length&&j<slotsB.length){
      let c1=slotsA[i][1]-slotsA[i][0];
      let c2=slotsB[j][1]-slotsB[j][0];
      if(c1<dur){
        i++;
      }
      if(c2<dur){
        j++;
      }
     
      if(slotsA[i][0]>=slotsB[j][0]){
        let c3 =slotsB[j][1]-slotsA[i][0];
       console.log(c3)
        if(c3<dur){
          j++;
        }
        else if(c3>=dur){
          arr.push(slotsA[i][0],slotsA[i][0]+dur);
          break;
        }
      }else if(slotsA[i][0]<slotsB[j][0]){
        let c3 =slotsA[i][1]-slotsB[j][0];
        if(c3<dur){
          i++;
        }
        else if(c3>=dur){
          arr.push(slotsB[j][0],slotsB[j][0]+dur);
          break;
        }
      }
    }
  return arr
  }
  // function getCheapestCost(rootNode):
  //   n = rootNode.numberOfChildren()

  //   if (n == 0):
  //       return rootNode.cost
  //   else:
  //       # initialize minCost to the largest integer in the system
  //       minCost = MAX_INT
  //       for i from 0 to n-1:
  //           tempCost = getCheapestCost(rootNode.child[i])
  //           if (tempCost < minCost):
  //               minCost = tempCost

  //   return minCost + rootNode.cost