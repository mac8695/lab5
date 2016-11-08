/**
 * Created by MaC on 2016-10-14.
 */
/* use downloaded jquery
find any html element with the class "confirmation"
 */
$('.confirmation').on('click', function(){
    return confirm('Are you sure you want to delete this?');
})