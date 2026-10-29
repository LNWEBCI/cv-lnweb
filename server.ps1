$baseDir = $PSScriptRoot
if (-not $baseDir) { $baseDir = Get-Location }

# Ports écoutés simultanément :
# - 5173 : Port par défaut attendu par l'extension Open Preview (Mobile Preview Simulator)
# - 8080 : Port standard alternatif
# - 3000 : Port développement standard
$ports = @(5173, 8080, 3000)

$listener = New-Object System.Net.HttpListener

foreach ($p in $ports) {
    try {
        $listener.Prefixes.Add("http://localhost:$p/")
        $listener.Prefixes.Add("http://127.0.0.1:$p/")
    } catch {
        Write-Warning "Impossible de lier le port $p (déjà utilisé ou non autorisé)"
    }
}

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  SERVEUR ACTIF POUR L'EXTENSION OPEN PREVIEW !" -ForegroundColor Cyan
    Write-Host "  -> http://localhost:5173/ (Port par défaut Open Preview)" -ForegroundColor Yellow
    Write-Host "  -> http://localhost:8080/" -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Green

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # En-têtes pour autoriser l'affichage dans l'iframe de l'extension Open Preview
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD")
        $response.AddHeader("Access-Control-Allow-Headers", "*")
        # Ne pas bloquer l'encadrement par l'extension
        $response.AddHeader("X-Frame-Options", "ALLOWALL")

        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }

        $path = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($path)) {
            $path = "index.html"
        }

        $filePath = Join-Path $baseDir $path

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                default { "application/octet-stream" }
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Non Trouve</h1>")
            $response.StatusCode = 404
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $notFound.Length
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
        }

        $response.Close()
    }
} catch {
    Write-Host "Erreur : $_" -ForegroundColor Red
} finally {
    $listener.Stop()
    $listener.Close()
}
