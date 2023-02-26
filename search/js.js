var i = 0;
var objusers = new Array();
var lawop = document.getElementById("law");
var govop = document.getElementById("gov");
var dddop = document.getElementById("ddd");
var jobsop = document.getElementById("jobs");
var usersdiv = document.getElementById("users");
var stary='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffff00" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>'
var data=
    [
    {governorate_name_ar:"القاهرة",governorate_name_en:"Cairo"},
    {governorate_name_ar:"الجيزة",governorate_name_en:"Giza"},
    {governorate_name_ar:"الأسكندرية",governorate_name_en:"Alexandria"},
    {governorate_name_ar:"الدقهلية",governorate_name_en:"Dakahlia"},
    {governorate_name_ar:"البحر الأحمر",governorate_name_en:"Red Sea"},
    {governorate_name_ar:"البحيرة",governorate_name_en:"Beheira"},
    {governorate_name_ar:"الفيوم",governorate_name_en:"Fayoum"},
    {governorate_name_ar:"الغربية",governorate_name_en:"Gharbiya"},
    {governorate_name_ar:"الإسماعلية",governorate_name_en:"Ismailia"},
    {governorate_name_ar:"المنوفية",governorate_name_en:"Menofia"},
    {governorate_name_ar:"المنيا",governorate_name_en:"Minya"},
    {governorate_name_ar:"القليوبية",governorate_name_en:"Qaliubiya"},
    {governorate_name_ar:"الوادي الجديد",governorate_name_en:"New Valley"},
    {governorate_name_ar:"السويس",governorate_name_en:"Suez"},
    {governorate_name_ar:"اسوان",governorate_name_en:"Aswan"},
    {governorate_name_ar:"اسيوط",governorate_name_en:"Assiut"},
    {governorate_name_ar:"بني سويف",governorate_name_en:"Beni Suef"},
    {governorate_name_ar:"بورسعيد",governorate_name_en:"Port Sid"},
    {governorate_name_ar:"دمياط",governorate_name_en:"Damietta"},
    {governorate_name_ar:"الشرقية",governorate_name_en:"Sharkia"},
    {governorate_name_ar:"جنوب سيناء",governorate_name_en:"South Sinai"},
    {governorate_name_ar:"كفر الشيخ",governorate_name_en:"Kafr Al sheikh"},
    {governorate_name_ar:"مطروح",governorate_name_en:"Matrouh"},
    {governorate_name_ar:"الأقصر",governorate_name_en:"Luxor"},
    {governorate_name_ar:"قنا",governorate_name_en:"Qena"},
    {governorate_name_ar:"شمال سيناء",governorate_name_en:"North Sinai"},
    {governorate_name_ar:"سوهاج",governorate_name_en:"Sohag"}
    ];
    var rln = ["أسعد","الأحمد","الأسعد","البشير","البكور","الحداد","الحسني","الحسين","الحسيني","الحلبوني","الحلبي","الحمصي","الحمود","الحموي","الروح","السحار","الشامي","الشققي","الصالح","الطويل","العمر","القيسي","المصري","المنجد","الموصلي","النجار","باذنجان","بارودي","بكور","تركاوي","حديد","حسين","حوراني","خليل","دياب","ريس","زكار","شعار","عبد الرؤوف","عثمان","عرابي","عمر","قصاب","قطان","لاذقاني","مؤذن"];
   var rnf = ["ابتسام","إبتهال","أبية","أرجوان","أرواح","أريج","أريحا","إسراء","أسرار","إسعاد","أسلية","إسمهان","أسمى","أسوة","أسيل","أسيمة","أمة الله","إشراق","إشفاق","أشواق","أصالة","أصيلة","إفتكار","أفراح","أفكار","أفنان","ألحان","ألطاف","إلهام","أليفة","آمال","أماني","آمنة","أمنية","أميرة","أمينة","إناس","إنتصار","انجي","إنصاف","إنعام","أنيسة","آيات","إيناس","بارعة","بتلاء","بدوية","بديعة","براءة","براح","براعم","بريئة","بشرى","بصيرة","بلبلة","بنان","بنانة","بنفسج","بهية","بهيجة","بوران","بيان","بيداء","بيسان","بيضاء","بينة","تحفة","تحية","تذكار","تراث","تركية","تسامح","تسبيح","تسنيم","تقاء","تقوى","تلال","تماضر","تهامة","تهاني","تهنيد","توحيدة","تودد","توسل","توفيقة","تي","تيجان","تيماء","ثابتة","ثائرة","ثراء","ثناء","جلاء","جمانة","جميلة","جهام","جهراء","جورية","جويرية","جيهان","حاكمة","حبيبة","حسناء","حصة","حلا","حميدة","حنان","حوراء","حياة","خاتون","ختام","خديجة","خلود","خواطر","خولة","خيرية","دانة","دانية","درية","دعاء","دعد","دلال","ديمة","ذكرى","راغدة","رامه","رامية","رانية","راوية","رحاب","رزان","رشا","رضوى","رفيف","رقية","رمزية","رهام","رهف","روضة","روعة","رؤى","ريم","ريما","زكية","زمردة","زينب","سارة","سالي","سحر","سلوى","سماهر","سمر","سمية","سناء","سهى","سهير","شادية","شذى","شمائل","شيماء","صابرين","صبا","عبلة","عبير","عزة","عصمت","عفاف","علا","عنود","غادة","غزل","غيداء","فاتن","فاطمة","فتحية","فدوى","فريال","فهمية","فوزية","فيحاء","كوثر","لبنى","لمى","لؤلؤة","ليلى","ماجدة","محاسن","مرام","مرح","مروة","مريم","مزنة","مسرة","منال","منى","منيرة","مها","مي","ميادة","ميساء","ميسون","نابغة","نادية","نبيلة","نجود","ندى","نرمين","نشوى","نغم","نهى","نوال","نورا","نوفة","هالة","هبة","هدى","هديل","هلا","هنادي","هند","هيفاء","وداد","وعد","ولاء","يمنى"];
   var rnm = ["أحمد","أسامة","أسد","أشرف","أكرم","نعمان","وليد","إمام","أمين","أنصاري","أنور","إياد","أيمن","إيهاب","باسل","باهر","بدر","بدري","بدوي","براء","برهان","بسام","بشير","بطل","بكر","بكري","بلال","بلبل","بنداري","بهاء","تامر","تركي","تمام","تيسير","جاسر","جاسم","جبر","جعيفر","جلال","جليل","جمال","جمعة","جواد","جوهري","حاتم","حبشي","حبيب","حجاج","حجازي","حجي","حداد","حسام","حسان","حسين","حفيظ","حلمي","حماد","حمادة","حمدان","حمدي","حمزة","حنفي","حيدر","خالد","خطاب","خيري","داوود","ربيع","رشدي","رضا","رضوان","رمضان","رياض","زاهد","زايد","زهران","زياد","ساري","سالم","سامر","سامي","سعد","سلطان","سمير","شادي","شهاب","صابر","صفوان","صلاح","طارق","طه","عادل","عامر","عبد الحميد","عبد الرحمن","عبد الله","عبد المعين","عبيدة","عثمان","عدنان","عزيز","علاء","علي","عمار","غازي","غسان","فاروق","فراس","فهد","فواز","كمال","لقمان","لؤي","ماجد","مازن","مأمون","محمد","مسعود","مشاري","مصطفى","مصعب","معاذ","معتصم","ممدوح","ناصر","نزار","نعمان","هاني","هشام","هلال","هيثم","وائل","وليد","ياسر"];
   var ddd =[  "هندسي", "إدارة","صحة","تعليم","تسوق","تجاري","ثقافي","زراعي","فني","تكنولجي","حرفي","رياضي","لغوي"];
   var jobs= ["مستشار قانوني","محام", "سكرتير قانوني"];
   const currentURL = document.baseURI;
var queries = currentURL.split("?");
   let js=queries[1];
   function profile() {

    window.location.href = "../profile/index.html";
 }


   for (i=0 ; i< data.length ; i++){

 govop.innerHTML+="<option value="+i+">"+data[i].governorate_name_ar+"</option>";
   }
   for (i=0 ; i< jobs.length ; i++){

    jobsop.innerHTML+="<option value="+i+">"+jobs[i]+"</option>";
      }
      for (i=0 ; i< ddd.length ; i++){

        dddop.innerHTML+="<option value="+i+">"+ddd[i]+"</option>";
          }
    let joboptions =jobsop.getElementsByTagName("option");
       
   
   for (i=0 ; i< 100 ; i++){

    let randomgov = Math.floor((Math.random() * 26) + 0);
    let job = Math.floor((Math.random() * 3) + 0);
    let stars = Math.floor((Math.random() * 5) + 1);
    let gend = Math.floor((Math.random() * 2) + 0);
    let imgnum = Math.floor((Math.random() * 10) + 1);
   
    let fn;
    if (gend==0){
        fn= rnm[  Math.floor((Math.random() * rnm.length ) + 0)];
        gend="m";

}
    else { 
        fn= rnf[  Math.floor((Math.random() * rnf.length ) + 0)];  
        gend = "f"; }

      let  ln= rnm[  Math.floor((Math.random() * rnm.length ) + 0)];
      let stsy=stary;
for (let i = 1; i < stars; i++) {
 
  stsy +=stary;
    
}

    objusers.push({key:objusers.length ,job:job , gender:gend , gov:randomgov , star:stars , fullname:fn+" "+ln , filters:[true,true,true,true] });

   
    console.log(gend);
    usersdiv.innerHTML+="<div class='flip-card' onclick='profile()' id='divuser"+i+"'><div class='flip-card-inner'><div class='flip-card-front'><img id='imguser"+i+"' src= 'img/"+gend+"/"+imgnum+".png' alt='Avatar' style='width:300px;height:300px;' ></div><div class='flip-card-back'><h1 class='username' id='nameuser"+i+"'>"+objusers[i].fullname+"</h1> <p id='starsuser"+i+"'>"+stsy+"</p> <p id='jobuser"+i+"'>"+jobs[job]+"</p>   <p id='govuser"+i+"'>"+data[randomgov].governorate_name_ar+"</p> <div> </div> </div>";

      }
function showAndH () {
    let divs =document.getElementsByClassName("flip-card");
    for ( let i =0; i<objusers.length ; i++) { 
        if((objusers[i].filters[0]&&objusers[i].filters[1])&&(objusers[i].filters[2]&&objusers[i].filters[3])) { divs[i].style.display = "";
        console.log(true); } else { console.log(false); divs[i].style.display = "none"; }
    }
}
function filterSelectiongov( v ) {

    if(v=="all")objusers.forEach(element => { element.filters[1]=true});
    else {
        objusers.forEach(element=>{
            if(element.gov==v)element.filters[1]=true;
            else element.filters[1]=false;
        })}

    showAndH ();
}
function law() {

lawop.setAttribute("selected" ,"selected");
}

function filterSelectionjob( v ) {

    if(v=="all")objusers.forEach(element => {  element.filters[2]=true});
    else { 
        objusers.forEach(element=>{
            if(element.job==v){element.filters[2]=true;  }
            else {element.filters[2]=false;   } 
        })}

    showAndH ();
}

function filterSelection(v) {
    if(v=="all")objusers.forEach(element => {  element.filters[0]=true});
    else if (v>10) { v2=v%10;
        objusers.forEach(element=>{
            if(element.star>=v2){element.filters[0]=true;  }
            else {element.filters[0]=false;   } 
        })}
        else { 
            objusers.forEach(element=>{
                if(element.star==v){element.filters[0]=true;  }
                else {element.filters[0]=false;   } 
            })}
    
        showAndH ();

}
joboptions[+js+1].setAttribute("selected" ,"selected");
filterSelectionjob( js );
