<template lang="">
    <div class="bg-light p-4 rounded">
        <h1>Add new user</h1>
        <div class="lead">
            Add new user and assign role.
        </div>

        <div class="container mt-4">
            <form method="POST" action="">
                
                <div class="mb-3">
                    <label for="name" class="form-label">First Name</label>
                    <input value="" 
                        type="text" 
                        class="form-control" 
                        name="fname" 
                        placeholder="Firsr Name" required>

                    
                        <span class="text-danger text-left"></span>
                    
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Last Name</label>
                    <input value="" 
                        type="text" 
                        class="form-control" 
                        name="lname" 
                        placeholder="Last Name" required>

                    
                        <span class="text-danger text-left"></span>
                    
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input value=""
                        type="email" 
                        class="form-control" 
                        name="email" 
                        placeholder="Email address" required>
                    
                        <span class="text-danger text-left"></span>
                    
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Password</label>
                    <input value=""
                        type="password" 
                        class="form-control" 
                        name="password" 
                        placeholder="Password" required>
                    
                        <span class="text-danger text-left"></span>
                    
                </div>

                <div class="mb-3">
                    <label for="username" class="form-label">Confirm Password</label>
                    <input value=""
                        type="password" 
                        class="form-control" 
                        name="cpassword" 
                        placeholder="Confirm Password" required>
                    
                        <span class="text-danger text-left"></span>
                    
                </div>

                <button type="submit" class="btn btn-primary">Save user</button>
                <a href="" class="btn btn-default">Back</a>
            </form>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>