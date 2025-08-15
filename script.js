
		function showName() {
			// Show filled name inside h1
            const name = document.getElementById('name').value;
            document.getElementById('dName').innerText = name || 'NAME';

		}

		function showGender() {
			// Show the selected gender inside h2
            const gender = document.getElementById('gender').value;
            document.getElementById('dGender').innerText = gender || 'GNDER';
		}

		function showEmail() {
			// Show the filled email inside h3
            const email = document.getElementById('email').value;
            document.getElementById('dEmail').innerText = email;
		}

		function showMobile() {
			// Show the filled mobile inside h4
            const mobile = document.getElementById('mobile').value;
            document.getElementById('dMobile').innerText = mobile;
		}

		function resetForm() {
			// Reset all the form elements to default values (blank "")
            document.getElementById("name").value = "";
			document.getElementById("gender").value = "";
			document.getElementById("email").value = "";
			document.getElementById("mobile").value = "";
		}

		function resetDisplay() {
			// Reset all the headings (h1, h2, h3, h4) to blank values
            document.getElementById("dName").innerText = "NAME";
			document.getElementById("dGender").innerText = "GENDER";
			document.getElementById("dEmail").innerText = "EMAIL";
			document.getElementById("dMobile").innerText = "MOBILE";
		}
