<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    // Global HTTP middleware stack
    protected $middleware = [
        // other middleware
    ];

    // Middleware groups
    protected $middlewareGroups = [
        'web' => [
            // other middleware
        ],

        'api' => [
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    // Route middleware
    protected $routeMiddleware = [
        // other route middleware
        'admin' => \App\Http\Middleware\AdminMiddleware::class,
    ];
}
