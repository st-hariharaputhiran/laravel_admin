<x-laravel-ui-adminlte::adminlte-layout>
@if (Auth::check()) 
         <meta name="user_id" content="{!! Auth::user() !!}" />
 @endif 
    <body class="hold-transition sidebar-mini layout-fixed">
        <div id="app"></div>
        @vite('resources/js/app.js')
    </body>
    
</x-laravel-ui-adminlte::adminlte-layout>
