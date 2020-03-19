// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector('.topics');
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(response=>{
    console.log(`this is the tabs response`,response);
    response.data.topics.forEach(objData=> {
        // const newTab = tabMaker(item);
        // console.log(`these are the topics`, response.data.topics);
        // let obj = response.data.topics;
        // Object.values(obj).forEach((value) => {
        //     console.log(value);
            // const newTab = tabMaker();
            console.log(`this is the tabs objData`,objData);
        tabs.append(tabMaker(objData));
        })
    })
.catch(error => {
    console.log('Uh-oh, Cap. We have encountered an error', error);
});

function tabMaker(value){
    //elements
    const tab = document.createElement('div')
    //structure
    //classes
    tab.classList.add('tab');
    //content
    tab.textContent = `${value}`

    return tab
}

