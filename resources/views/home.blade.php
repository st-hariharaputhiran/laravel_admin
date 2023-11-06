@extends('layouts.app')
<script>
    var app1 = {{ Js::from($user) }};
    console.log(app1);
</script>
@section('content')
    <div class="container-fluid">
        <h1 class="text-black-50">You are logged in!</h1>
    </div>
@endsection
