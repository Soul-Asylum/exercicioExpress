
const express =  require('express');
const app = express();


app.use(express.json());

app.post('/', (req, res) => {
  const body = req.body

  products = [...products, body];
  res.status(200).json(products);
});

app.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  products = products.map((item)=> {
      if(item.id === id) {
        return {...item, ...body};
      }
      return item;
  })
  res.status(200).json(products);
})

app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((item) => item.id !== id);
  res.status(201).json(products);
});

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(3001, () => console.log("Backend Rodando..."));