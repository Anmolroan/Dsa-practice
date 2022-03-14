function runProgram(input) {
    // Write code here
    let N =+input[0];
   
  
   
   
   
  }
  function fib(N){
  var array =["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Welsh_bicycle_shop_in_Caernarfon.jpg/1280px-Welsh_bicycle_shop_in_Caernarfon.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IqK-_afAgyjkIJ13RpMvZSsBdu8XpGzBPA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXtkuA4eATCHeCeDnhp4flBzm6Z5eiF83RQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpNWCJfEQXYOTIgVoJEHCn25R72FSHlOr4gg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4qOZM4WqS1ZxvkuAhHbzT7f7meQ8vcjTmw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpi81ZhI2An4kDG8jdLsVs5Fm8b8VuaKTlg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3SuM-JKenG1DyeA3shmPtoIzTI08FMcdXw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyB2ozUC76TkesH_MP5OarhJoBebYKzFLaA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJ_900pzfiG8FOJ9c3WykHb-uF1SR85a3lg&usqp=CAU",
"https://i0.wp.com/www.mbaproducts.com/wp-content/uploads/2017/01/111oiuy.jpg?resize=730%2C360&ssl=1",
"https://upload.wikimedia.org/wikipedia/commons/6/6b/2008-04-17_1989_Saab_900_Turbo_getting_new_tyres.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgXP4itnIG8Pd0mmuxR40M_5UqB01stxNmhQBUo2qugtkh28wGu3hCNv_ZqkkvkphxXs&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP-R8drR6HatkeAB3zUkxRiy6pnimNb3FWgguB7-iMdmvrWFA_BdC_uvORO42B_zvMEk&usqp=CAU", 
"https://paultan.org/image/2019/11/Workshop-Area-Shah-Alam-e1584707974975-1200x675.jpg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5s9aYJHA7HCn0en03W9dgNaJhVEQZxAFaMAyj-wQUlDWoyzpmdX-tzkg-Iu6WtIOPFg&usqp=CAU",
"https://www.carkaki.my/wp-content/uploads/job-manager-uploads/gallery_images/2017/04/Detroit-Auto-Services-5-1.jpg"
]
}
 
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }