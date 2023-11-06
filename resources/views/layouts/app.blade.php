<x-laravel-ui-adminlte::adminlte-layout>
<script>
    var app1 = {{ Js::from($user) }};
    console.log(app1);
</script>
<meta name="user" content="app1" />
    <body class="hold-transition sidebar-mini layout-fixed">
        <div id="app"></div>
        @vite('resources/js/app.js')
    </body>
    
</x-laravel-ui-adminlte::adminlte-layout>
