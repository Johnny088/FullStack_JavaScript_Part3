const markupLi = (id, title) =>
  `<li id="${id}"><h3>${title}</h3><button data-id="view">View details</button><button class="delete" data-id="del">Delete</button><button data-id="edit">Edit</button></li>`;
const api = axios.create({
  baseURL: `https://6971cf4a32c6bacb12c49096.mockapi.io/books`,
});
// -------------------------------render html-----------------------------------------
const root = document.querySelector('#root');
const list = document.createElement('ul');
list.classList.add('list');
const container = document.createElement('div');
container.classList.add('container');
const infoDiv = document.createElement('div');
infoDiv.classList.add('info');
root.innerHTML = '<h1 class="title">List of books</h1>';
const addBtn = document.createElement('button');
addBtn.textContent = 'add new book';
addBtn.classList.add('form_btn');
root.append(container);
container.append(list, infoDiv, addBtn);
// ---------------------------------- get Api data + Render books ---------------------------------
async function renderBooks() {
  list.innerHTML = '<h2>Loading...</h2>';
  try {
    const { data } = await api.get('/');
    const books = data.map(({ id, title }) => markupLi(id, title)).join('');
    list.innerHTML = books;
  } catch (error) {
    console.log(error);
  }
}
renderBooks();
// -------------------------------------------------- deleting book -------------------
const deleteBook = async id => {
  try {
    await api.delete(`/${id}`);
    renderBooks();
  } catch (error) {
    console.log(error);
  }
};
//---------------------------------------------------    get book by  id ---------------
async function getBookById(id, btn) {
  try {
    const { data } = await api.get(`/${id}`);
    const { title, author, year, description } = data;
    infoDiv.innerHTML = `<h3>${title}</h3> <p>${author}</p> <p>${year}</p> <p>${description}</p>`;
  } catch (error) {
    console.log(error);
  } finally {
    btn.textContent = 'View details';
  }
}
// -------------------------- adding listeners for view details and delete buttons --------------------------
list.addEventListener('click', async e => {
  e.preventDefault();
  if (e.target.nodeName === 'BUTTON') {
    if (e.target.dataset.id === 'view') {
      e.target.textContent = 'Loading...';
      const id = e.target.parentNode.id;
      getBookById(id, e.target);
    } else if (e.target.dataset.id === 'del') {
      e.target.textContent = 'Deleting...';
      const id = e.target.parentNode.id;
      await deleteBook(id);
      infoDiv.innerHTML = `<h2>the book was deleted</h2>`;
      setTimeout(() => (infoDiv.innerHTML = ''), 3000);
    } else if (e.target.dataset.id === 'edit') {
      e.target.textContent = 'Editing...';
      const id = e.target.parentNode.id;
      editBook(id, e.target);
    }
  }
});
// ----------------- adding a new book --------------------
addBtn.addEventListener('click', () => {
  infoDiv.innerHTML = '';
  if (root.querySelector('form')) {
    return;
  }

  const form = formHandler();

  infoDiv.append(form);
  newBookHandler(form);
});

function newBookHandler(form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const year = Number(form.year.value);
    const title = form.bookTitle.value.trim();
    const author = form.author.value.trim();
    const description = form.description.value.trim();

    const error = validate(year, title, author, description);

    if (error !== '') {
      alert(error);
      return;
    }
    const saveBtn = form.querySelector('.save_btn');
    saveBtn.textContent = 'saving....';
    const newBook = {
      title: title,
      author: author,
      year: year,
      description: description,
    };
    addToApi(newBook, form);
  });
}

async function addToApi(newBook, form) {
  try {
    await api.post('/', newBook);
    form.remove();
    renderBooks();
  } catch (error) {
    console.log(error);
  }
}

// -------------------------------- form -------------------
function formHandler(title = '', author = '', year = '', description = '') {
  const form = document.createElement('form');
  form.classList.add('submitForm');
  form.innerHTML = `<input type="text" placeholder="Title"  name="bookTitle" value="${title}"/>
    <input type="text" placeholder="Author" name="author" value="${author}"/>
    <input type="text"  placeholder="Year" name="year" value="${year}"/>
    <textarea type="text" placeholder="Description" name="description" rows="5" cols="50">${description}</textarea>
    <button class="save_btn">Save</button>`;
  return form;
}
//-------------------------------validation---------------------------------
function validate(year, title, author, description) {
  let error = '';
  let n = 0;
  if (Number.isNaN(year) || year <= 0 || !Number.isInteger(year)) {
    error += `${(n += 1)}) - Year must be a number, and >= 0\n`;
  }
  if (!title) {
    error += `${(n += 1)}) - The title is required\n`;
  }
  if (!author) {
    error += `${(n += 1)}) - The author is required\n`;
  }
  if (!description) {
    error += `${(n += 1)}) - The description is required`;
  }
  return error;
}
// ----------------------------------------------- update ------------------------------------
async function editBook(id, btn) {
  try {
    const { data } = await api.get(`/${id}`);
    const { title, author, year, description } = data;
    const form = formHandler(title, author, year, description);
    infoDiv.innerHTML = '';
    infoDiv.append(form);
    updateBookHandler(form, id, btn);
  } catch (error) {
    console.log(error);
  }
}

async function updateToApi(id, updatedBook, btn, form) {
  try {
    await api.put(`/${id}`, updatedBook);
  } catch (error) {
    console.log(error);
  } finally {
    btn.textContent = 'Edit';
    renderBooks();
    form.remove();
  }
}

function updateBookHandler(form, id, btn) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const saveBtn = form.querySelector('.save_btn');
    const year = Number(form.year.value);
    const title = form.bookTitle.value.trim();
    const author = form.author.value.trim();
    const description = form.description.value.trim();
    const error = validate(year, title, author, description);
    if (error !== '') {
      alert(error);
      return;
    }
    saveBtn.textContent = 'saving....';
    const updatedBook = {
      title: title,
      author: author,
      year: year,
      description: description,
    };

    updateToApi(id, updatedBook, btn, form);
  });
}
