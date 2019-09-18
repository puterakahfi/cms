<?php

namespace spec\App\Domain\ValueObject;

use App\Domain\ValueObject\CourseId;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class CourseIdSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(CourseId::class);
    }
}
