# CHANGE THE WORDS

Change the words with jQuery

## USAGE
~~~
          <div id="changethewords">
            I love
            <span data-id="1">Code</span>
            <span data-id="2">Spaghetti</span>
            <span data-id="3">Cats</span>
            <span data-id="4">Bikes</span>
            <span data-id="5">People</span>
            <span data-id="6">Me</span>
            <span data-id="7">You</span>
          </div>
~~~
~~~
  <script src="jquery.changethewords.js"></script>
  <script type="text/javascript">
    $(function() {
      $("#changethewords").changeWords({
        time: 1500, // Wait time
        animate: "tada", // Animation name
        selector: "span" // Words selector
      });
    });
  </script>
~~~
