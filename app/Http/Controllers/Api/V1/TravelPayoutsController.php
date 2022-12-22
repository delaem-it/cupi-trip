<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use thewulf7\travelPayouts\Travel;


class TravelPayoutsController extends Controller
{
    public function index()
    {
        $travel = new Travel('37a27d5db50c6199a688c51139146776');
        $flightService = $travel->getFlightService();
        $flightService
            ->setIp('127.0.0.1')
            ->setHost('aviasales.ru')
            ->setMarker('211648')
            ->addPassenger('adults', 2)
            ->addSegment('LED', 'MOW', '2016-02-01');
        $searchData    = $flightService->search('ru', 'Y');
        $searchResults = $flightService->getSearchResults($searchData['search_id']);
        return $searchResults;
    }
}