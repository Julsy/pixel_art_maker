const height = $('#inputHeight');
const width = $('#inputWidth');
const table = $('#designCanvas');
const color = $('#colorPicker');

function clearGrid() {
  let row = $('tr');
  let col = $('td');
  row.remove();
  col.remove();
}

$('#submit').on('click', function makeGrid(event) {
  event.preventDefault();
  clearGrid();
  for (let i = 0; i < height.val(); i++) {
    table.append('<tr></tr>');
  }
  let row = $('table tr');
  for (let j = 0; j < width.val(); j++) {
    row.append('<td></td>');
  }
});

table.on('click', 'td', function() {
  let pickedColor = color.val();
  let cell = $(this);
  let currentColor = cell.css('background-color');
  let isClear = !currentColor || currentColor === 'rgb(211, 211, 211)';

  if (isClear) {
    cell.css('background-color', pickedColor);
  } else {
    cell.removeAttr('style');
  }
});

table.on('mousemove mouseenter mouseleave mouseover', 'td', function(event) {
  if (event.which === 1) {
    let pickedColor = color.val();
    $(this).css('background-color', pickedColor);
  }
});