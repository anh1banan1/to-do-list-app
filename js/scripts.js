function newItem() {
    // Adding new item to list of items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    let list = $('#list');
    if (inputValue === '') {
        alert('You must write something!');
      } else {
        list.append(li);
      }

    // Crossing out an item on the list
    li.on('click', function() {
        li.toggleClass('strike');
    });
    
    // Adding the delete button "x"
    let crossOutButton = $('<crossOutButton>x</crossOutButton>');
    li.append(crossOutButton);

    // Adding CLASS DELETE (DISPLAY: NONE) from css
    crossOutButton.on('click', function() {
        li.addClass('delete');
    });

    // Reordering items
    list.sortable();
}