'use strict';

void function() {
    const forms = '#form';
    const formsData = JSON.parse(localStorage.getItem(forms))
    const ul = document.createElement('ul')
    for (let listItem in formsData){
        const li = document.createElement('li')
        if (formsData[listItem] === ''){
            formsData[listItem] = 'not data';
            li.innerHTML = `${listItem}___${formsData[listItem]} `
        } else{
            li.innerHTML = `${listItem}___${formsData[listItem]} `
        }
        ul.append(li)

    }
    document.body.prepend(ul)

}()



