let grid = 
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]]
let max=-Infinity;
for(let i =grid.length-1;i>=0;i--){
    for(let j=grid[0].length-1;j>=0;j--){
        if(grid[i][j]!=0){
            if(j<grid[0].length-1){
                grid[i][j]=grid[i][j+1]+grid[i][j];
                
            }
            if(i>0){
                grid[i][j]=grid[i-1][j]+grid[i][j];
               
            }
            if(i<grid.length-1){
                grid[i][j]=grid[i+1][j]+grid[i][j];
               
            }
        }
       
        max=Math.max(max,grid[i][j])
    }
}
console.log(grid)