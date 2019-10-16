import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './services/swagger-specs';
import productsRoutes from './routes/products';
import categoriesRoutes from './routes/categories'; // add this
import usersRoutes from './routes/users'; // add this
import rolesRoutes from './routes/roles'; // add this
import userRolesRoutes from './routes/user_roles'; // add this
const app = express();

// middlewares
app.use(bodyParser.json());

// register routes
app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);
app.use('/roles', rolesRoutes);
app.use('/userRoles', userRolesRoutes);

// api docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// error handling
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  });
});

export default app;
