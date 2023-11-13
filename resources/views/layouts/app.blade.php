<x-laravel-ui-adminlte::adminlte-layout>

    <body class="hold-transition sidebar-mini layout-fixed">
        <div id="app"></div>
        @vite('resources/js/app.js')
    </body>
    
</x-laravel-ui-adminlte::adminlte-layout>
<script type="text/javascript">
    {{ dd(\Auth::user()) }}
    window.Laravel = {
        csrfToken: "{{ csrf_token() }}",
        jsPermissions: {!! auth()->check()?auth()?->user()?->jsPermissions():null !!}
    }
</script>
