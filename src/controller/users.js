import ServiceUser from '../service/users.js';

class ControllerUser {
  FindAll(req, res) {
    try {
      const result = ServiceUser.BuscarTodos();
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  FindOne(req, res) {
    try {
      const index = parseInt(req.params.index);
      const result = ServiceUser.FindOne(index);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  Create(req, res) {
    try {
      const { nome } = req.body;
      const result = ServiceUser.Create(nome);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  Update(req, res) {
    try {
      const index = parseInt(req.params.index);
      const { nome } = req.body;
      const result = ServiceUser.Update(index, nome);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  Delete(req, res) {
    try {
      const index = parseInt(req.params.index);
      const result = ServiceUser.Delete(index);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

export default new ControllerUser();