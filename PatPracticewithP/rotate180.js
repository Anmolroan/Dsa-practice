var matrix =[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ],
 [ 9, 0, 1, 2 ], [ 3, 4, 5, 6 ] ];

 function rotateBy180(N, matrix){
    //write code here
let mid =Math.floor(N/2);

for(let i =0;i<mid;i++){
    
        for(let j =0;j<N;j++){
            [matrix[i][j],matrix[N-i-1][N-j-1]]=[matrix[N-i-1][N-j-1],matrix[i][j]];
              

 
}
if(N%2!==0){
matrix[mid]=matrix[mid].reverse();
}

}
console.log(matrix);
 }
rotateBy180(matrix.length, matrix)