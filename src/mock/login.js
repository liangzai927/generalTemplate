const userData = {
  id: 1,
  name: 'lwl',
  token: '1234567890qwertyuiop',
}

export default {
  'get|/user/login': option => {
    return {
      status: 200,
      message: 'success',
      data: userData
    };
  }
}