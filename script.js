const $studentItem = $('.student-item');
const $page = $('.page');
const $pagination = $('.pagination');
const $paginationList = $('.pagination__list');
const $studentSearch = $('.student__search');
const itemTotal = 10;

function hideAll(){
    $studentItem.hide();
}

hideAll();


function displayRange(a,b) {
    hideAll();
    
    $studentItem.slice(a,b).fadeIn();
    
  }
  
  displayRange(0, itemTotal);
  
 
  let pagination = '';
  for(var i = 0; i <= $studentItem.length / 10 - 1; i ++) {
    pagination += `
      <li><span class ="pagination__num">${i}</span></li>
  `;
  }
  $paginationList.append(pagination);
 
  $('body').on('click', '.pagination__num', function () {
  
    hideAll();
    
    
    let paginationText = Number($(this).text());
    let startFrom = paginationText * itemTotal + paginationText;
    let end = paginationText * itemTotal + paginationText + itemTotal;
    
   
    displayRange(startFrom, end);
     
  });
  
  
  $studentSearch.on('input', function () {
  
   hideAll();
    
    $studentItem.each(function() {
      $(this).removeClass("result");
      
    });
    
    
      // value of searched
      var text = $(this).val().toLowerCase();
      // results of search
      var results = $("ul.student-list li:contains('" + text.toLowerCase() + "')");
    
       results.addClass("result");
        
        
  
    
    if($studentItem.hasClass('result')) {
        $('.result').show();
        $studentItem.removeClass('result');
        
       } 
  
   
  });
  
  $studentSearch.keyup(function()
  {
       if (!this.value) {
         hideAll();
         displayRange(0, itemTotal);
      }
  
  });