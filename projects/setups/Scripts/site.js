$(document).ready(function()
{   
    $('nav a').on('click', function()
    {   
        // Current Class Assigniment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        // Set heading text
        $('h1#heading').text($(this).text());

        // Get & filter link text
        var category = $(this).text().toLowerCase().replace(' ','-');

        // Remove hidden class if 'all-projects' is selected
        if(category == 'all-setups')
        {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } 
        else
        {
            $('ul#gallery li').each(function()
            {
                if(!$(this).hasClass(category))
                {
                    $(this).hide().addClass('hidden');
                }
                else
                {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        // Stop link behavior
        return false;
    });

    // mouseenter overlay
    $('ul#gallery li').on('mouseenter', function()
    {
        // Get data attribute values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');

        // Validation
        if (desc == null)
        {
            desc = 'Click to Enlarge';
        }

        if (title == null)
        {
            title = '';
        }

        // Create overlay div
        $(this).append('<div class="overlay"></div>');

        // Get the overlay div
        var overlay = $(this).children('.overlay');

        // Add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

        // Fade in overlay
        overlay.fadeIn(800);
    });

    // MouseLeave overlay
    $('ul#gallery li').on('mouseleave', function()
    {
        // Create overlay div
        $(this).append('<div class="overlay"></div>');

        // Get the overlay div
        var overlay = $(this).children('.overlay');

        // Fade out overlay
        overlay.fadeOut(500);
    });

    // Background Letters effect
    var speed = 450;
    var fadeSpeed = 100;
    var words = [
    "Reggaeton","Salsa","Bachata","Mambo","Swing",'Charanga','Merengue','Trap','House',
    "Techno",'Electronica','Kizomba','Semba','LatinHouse','Vallenato','Tipico',"Indie","Blues",
    "Country","Hip-Hop","Jazz","Pop","Rock","Folk"
    ];

    var wordTimer = setInterval(AddWord, speed);
    var delayTimer = setInterval(TriggerRemoval, 3000);
    var unWordTimer;
    var wordCount = 0;
    var removeCount = 0;

    function TriggerRemoval()
    {
        window.clearInterval(delayTimer);
        unWordTimer = setInterval(RemoveWord,speed);
    }

    function RemoveWord()
    {
        removeCount++;
        $('#' +'word' + removeCount).animate(
        {
            opacity:0
        }, fadeSpeed, function()
            {
                $('#' + 'word' + removeCount).remove();
            });
    }

    function AddWord()
    {
        wordCount++
        var randX = Math.floor(Math.random() * window.innerWidth - 250);
        var randY = Math.floor(Math.random() * window.innerHeight - 120);

        // Create an h1 element
        var word = document.createElement('p');

        word.setAttribute('id','word' + wordCount);

        // with a postion etc
        word.innerHTML = words[Math.floor(Math.random() * words.length)];
        word.setAttribute('class','word');
        word.style.top = randY + 'px';
        word.style.left = randX + 'px';
        word.style.opacity = 0;

        // add that to our body
        document.body.appendChild(word);

        $('#' + 'word' + wordCount).animate(
            {
                opacity: 1
            }, fadeSpeed, 'swing'
        );
    }
});