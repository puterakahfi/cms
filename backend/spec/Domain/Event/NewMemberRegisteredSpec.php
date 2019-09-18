<?php

namespace spec\App\Domain\Event;

use App\Domain\Event\NewMemberRegistered;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class NewMemberRegisteredSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(NewMemberRegistered::class);
    }
}
