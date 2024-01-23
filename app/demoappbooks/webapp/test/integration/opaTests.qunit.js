sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'demoappbooks/test/integration/FirstJourney',
		'demoappbooks/test/integration/pages/BooksList',
		'demoappbooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('demoappbooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);