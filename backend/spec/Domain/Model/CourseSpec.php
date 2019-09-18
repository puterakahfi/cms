<?php

namespace spec\App\Domain\Model;

use App\Domain\Model\Course;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class CourseSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(Course::class);
    }
}
