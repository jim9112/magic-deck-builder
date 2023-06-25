<script lang="ts">
    import { goto } from '$app/navigation';
    import {authUser} from '$lib/authStore';
    import {signInWithEmailAndPassword} from'firebase/auth';
    import {firebaseAuth} from '$lib/firebase';
    import CardLarge from "./global/CardLarge.svelte";
    let email: string;
    let password: string;
    const login = () => {
        signInWithEmailAndPassword(firebaseAuth, email, password).then(userCredential => {
            $authUser = {
                uid: userCredential.user.uid,
            }
            goto('/my-cards');
        }).catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
        
    }
</script>
    <CardLarge>
        <form action="" on:submit|preventDefault={login}>
            <div class="flex gap-2">
                <div class="flex flex-col">
                    <label for="email">Email</label>
                    <input bind:value={email} type="email" name="email" id="email">
                </div>
                <div class="flex flex-col">
                    <label for="password">Password</label>
                    <input bind:value={password} type="password" name="password" id="password">
                </div>
            </div>
            <input type="submit" value="Login">
        </form>

    </CardLarge>
