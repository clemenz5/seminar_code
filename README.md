# seminar_code
This code is designed to demonstrate a REST API four our presentation on REST APIs at the semniar "The origin of the web"
## start backend
- install deno
- ``deno run --allow-net backend/deno.ts``
## start frontend
- install node
- ``cd frontend``
- ``npm i``
- ``npm run start``

curl -d '{"didUseREST":true, "didUseRPC":false, "didUseSOAP":false}' -H "Content-Type: application/json" -X POST https://lorenz.nat.selfnet.de/rest/pollSub

Invoke-WebRequest -Uri https://lorenz.nat.selfnet.de/rest/pollSub -Method POST -Body '{"didUseREST":true, "didUseRPC":false, "didUseSOAP":false}' -ContentType "application/json"

