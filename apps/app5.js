// function ask(question , yes, no){
//     if (confirm(question)) yes()
//     else no()
// }
// ask( 'do you agree?', function(){
//     alert('you agreed.');
// },
// function(){
//     alert('you canceled the function.');
// });

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "do you agree?",
  () => alert("you agreed."),
  () => alert("you canceled the function.")
);
