const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  // Get one category from the category table
 Category.findOne(
    {
      // Gets the category based on the isbn given in the request parameters
      where: { 
       id: req.params.id,
       include: [{ model: Product}],
      },
    }
  ).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
  // create a new category

  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

//Calls the update method on the category model
Category.update(
  {
    // All the fields you can update and the data attached to the request body.
    id: req.body.id,
    category_name: req.body.category_name,
  },
  {
    // Gets a category based on the category_id given in the request parameters
    where: {
      category_id: req.params.category_id,
    },
  }
)
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

 // Looks for the categories based category_id given in the request parameters
 Category.destroy({
  where: {
    category_id: req.params.category_id,
  },
})
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
