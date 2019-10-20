
// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
  path: 'andras/modeler',
  method: 'get',
  test() {
    assert.equal(response.length, 6);
    assert.equal(response[0].id, "annans-1");
    assert.equal(response[1].id, "annans-2");
    assert.equal(response[2].id, "annans-3");
    assert.equal(response[3].id, "annans-4");
    assert.equal(response[4].id, "annans-5");
    assert.equal(response[5].id, "annans-6");

    assert.equal(response[0].pris, 199);
    assert.equal(response[1].pris, 199);
    assert.equal(response[2].pris, 199);
    assert.equal(response[3].pris, 199);
    assert.equal(response[4].pris, 199);
    assert.equal(response[5].pris, 199);

  }
});