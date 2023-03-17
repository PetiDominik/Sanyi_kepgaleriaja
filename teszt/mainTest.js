QUnit.module('leptetes metódus tesztelése', function() {
    QUnit.test('1. letezik-e a leptetes() metódus?', function(assert) {
        assert.ok(leptetes, "Létezik a léptetés");
    });
    QUnit.test('2. a léptetés függvény?', function(assert) {
        assert.ok(typeof leptetes === "function", "a léptetés függvény");
    });
    
    QUnit.test('3. leptetes(1, 2)', function(assert) {
      assert.equal(leptetes(1, 2), 3);
    });
    QUnit.test('. leptetes(1, 0)', function(assert) {
      assert.equal(leptetes(1, 0), 1);
    });
    QUnit.test('5. leptetes(1, hossz-1)', function(assert) {
      assert.equal(leptetes(1, lista.length-1), 0);
    });
    QUnit.test('6. leptetes(-1, 2)', function(assert) {
      assert.equal(leptetes(-1, 2), 1);
    });
    QUnit.test('7. leptetes(-1, 0)', function(assert) {
      assert.equal(leptetes(-1, 0), lista.length-1);
    });
    QUnit.test('8. leptetes(-1, hossz-1)', function(assert) {
      assert.equal(leptetes(-1, lista.length-1), lista.length-2);
    });
  });

QUnit.module('kepracsEloallit metódus tesztelése', function() {

    QUnit.test('1. letezik-e a kepracsEloallit() metódus?', function(assert) {
        assert.ok(kepracsEloallit, "Létezik a kepracsEloallit()");
    });
    QUnit.test('2. a kepracsEloallit függvény?', function(assert) {
        assert.ok(typeof kepracsEloallit === "function", "a kepracsEloallit függvény");
    });
    
    QUnit.test('3. kepracsEloallit() teljes lista', function(assert) {
        lista = [
            "kepek/alszik.jpg",
            "kepek/bocsok.jpg",
            "kepek/cirkusz.jpg",
        ];
        assert.equal(kepracsEloallit(), '<div><img src=\"kepek/alszik.jpg\" alt=\"\"></div><div><img src=\"kepek/bocsok.jpg\" alt=\"\"></div><div><img src=\"kepek/cirkusz.jpg\" alt=\"\"></div>');
    });
    QUnit.test('4. kepracsEloallit() egyelemű lista', function(assert) {
        lista = [
            "kepek/alszik.jpg",
        ];
        assert.equal(kepracsEloallit(), '<div><img src=\"kepek/alszik.jpg\" alt=\"\"></div>');
    });
    QUnit.test('5. kepracsEloallit() üres lista', function(assert) {
        lista = [];
        assert.equal(kepracsEloallit(), "");
    });
  });

QUnit.module('elem megjelenése az oldalon', function() {

    QUnit.test('A kisképek száma megegyezik a lista elemeinek számával', function(assert) {
        let lista = [
            "kepek/alszik.jpg",
            "kepek/bocsok.jpg",
            "kepek/cirkusz.jpg",
            "kepek/eszik.jpg",
            "kepek/integet.jpg",
            "kepek/maci.jpg",
            "kepek/medve.jpg",
            "kepek/taj.jpg",
        ];
        assert.equal(document.querySelectorAll("article img").length, lista.length);
    });
});