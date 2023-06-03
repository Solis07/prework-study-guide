var topics = ['HTML', 'CSS', 'Git', 'Javascript'];

function listTopics() {
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
}


function selectTopic() {
if (topic === 'HTML') {
    console.log("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log("Lets study CSS!");
} else if (topic === 'Git') {
    console.log("Let's study Git!");
}else if (topic === 'Javascript') {
    console.log("Let's study Javascript!");
} else {
    console.log('Please try again!');
}
}