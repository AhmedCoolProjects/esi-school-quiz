<div class="navbar sticky z-50 top-0 shadow-lg bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">
			<img src="/favicon.png" alt="logo" class="h-8 w-8" />
			ESI Quiz</a
		>
	</div>
	<div class="flex-none gap-2">
		<div class="form-control hidden md:flex">
			<input type="text" placeholder="Search" class="input input-bordered" />
		</div>
		<div class="dropdown dropdown-end">
			<label for="user_avatar_container" tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div id="user_avatar_container" class="w-10 rounded-full">
					<img alt="user_avatar" src="/pngs/account.png" />
				</div>
			</label>
			<!-- <ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<a href="/profile" class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a href="/settings">Settings</a></li>
				<li>
					<a href="/">
						{#if false}
							Login
						{:else}
							Logout
						{/if}
					</a>
				</li>
			</ul> -->
		</div>
	</div>
</div>
