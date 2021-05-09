const output = document.getElementsByClassName('aquama-calculator-output')[0];
const squareArea = document.getElementById('square-area');
const numberOfPeople = document.getElementById('number-of-people');
const numberOfMonths = document.getElementById('number-of-months');
const totalCost = document.getElementById('total-cost');
const aquamaCost = document.getElementById('aquama-cost');
const calculateBtn = document.getElementById('calculate');

const costPerPerson = 6.6;
const costPerSquare = 160/100/6;
const aquamaPerMonthSquare = 27/6/100;
const aquamaPerMonthPeople = 0.17;

calculateBtn.addEventListener('click', calculateCosts);

function calculateCosts() {
    const condition = squareArea.selectedIndex !== 0 && numberOfPeople.selectedIndex !== 0 && numberOfMonths.selectedIndex !== 0

    if(condition) {
        const totalCostCalculated = (parseFloat(squareArea.value) *  parseFloat(numberOfMonths.value) * costPerSquare)
            + (parseFloat(numberOfPeople.value) * parseFloat(numberOfMonths.value) * costPerPerson);

        const aquamaCostCalculated = (parseInt(squareArea.value) *  parseInt(numberOfMonths.value) * aquamaPerMonthSquare)
            + (parseInt(numberOfPeople.value) * parseInt(numberOfMonths.value) * aquamaPerMonthPeople);

        totalCost.innerHTML = totalCostCalculated.toFixed().toString();
        aquamaCost.innerHTML = aquamaCostCalculated.toFixed().toString();
        output.style.display = 'flex';
    }
}
function styleSelect() {
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
}
styleSelect();
