(function () {
  'use strict';

  angular
    .module('wrtd.articles')
    .service('ArticlesService', ArticlesService);

  function ArticlesService($q) {
    return {
      getAll: getAll,
      getById: getById
    };

    /* ---------------------
     * Public Functions
     * --------------------- */

    function getAll() {
      var deferred = $q.defer();

      deferred.resolve([
        {
          id: '1',
          name: "Web",
        },
        {
          id: '1.1',
          name: "Angular",
        },
        {
          id: '1.1.1',
          name: "Extend directives"
        },
        {
          id: '1.1.2',
          name: "Architecture"
        },
        {
          id: '2',
          name: "Movies",
        },
        {
          id: '3',
          name: "Trips",
        }
      ]);

      return deferred.promise;
    }

    function getById(id) {
      var deferred = $q.defer();

      deferred.resolve({
        id: 6,
        name: "Architecture",
        content: "" +
        "<p>Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis. quam Constantina exultans ut in tuto iam locata mariti salute muneratam vehiculoque inpositam per regiae ianuas emisit in publicum, ut his inlecebris alios quoque ad indicanda proliceret paria vel maiora.</p>" +
        "<h2>Modular</h2>" +
        "<p>Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse.</p>" +
        "<p>Itaque tum Scaevola cum in eam ipsam mentionem incidisset, exposuit nobis sermonem Laeli de amicitia habitum ab illo secum et cum altero genero, C. Fannio Marci filio, paucis diebus post mortem Africani. Eius disputationis sententias memoriae mandavi, quas hoc libro exposui arbitratu meo; quasi enim ipsos induxi loquentes, ne 'inquam' et 'inquit' saepius interponeretur, atque ut tamquam a praesentibus coram haberi sermo videretur.</p>" +
        "<h2>Hot loading</h2>" +
        "<h3>Definition</h3>" +
        "<p>Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse.</p>" +
        "<h3>Tools</h3>" +
        "<p>Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse.</p>"
      });

      return deferred.promise;
    }
  }
})();
