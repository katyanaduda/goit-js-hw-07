function list() {
    const $categories = document.querySelectorAll('ul#categories > li.item');

    console.log($categories.length);

    $categories.forEach(item => {
        const $item = item.querySelector('h2');
        console.log(`Category: ${$item.textContent}`);
        const $items = item.querySelectorAll('ul > li');
        console.log(`Elements: ${$items.length}`);
    })
}
list();