rowlink
=======

make table row's or a whole block of code clickable and linked to one of its child element's href value
<pre>
<table id="products">
  <tr>
    <td>Product 1</td>
    <td>Lorem ipsum dolor</td>
    <td><a href="http://www.example.com">View</a></td>
  </tr>
  <tr>
    <td>Product 2</td>
    <td>Lorem ipsum dolor</td>
    <td><a href="http://www.example.com">View</a></td>
  </tr>
  <tr>
    <td>Product 3</td>
    <td>Lorem ipsum dolor</td>
    <td><a href="http://www.example.com">View</a></td>
  </tr>
</table>
</pre>
<code>
$('#products').rowlink('tr td a');
</code>
